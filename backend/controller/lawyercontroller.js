import catchAsyncError from "../middleware/catchasyncerror.js";
import Lawyer from "../models/lawyerapplicationmodel.js";
import Errorhandler from "../utils/Errorhandler.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import User from "../models/usermodel.js";
// import nodeMailer from "nodemailer";
// const transporter = nodeMailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   // service: process.env.SMPT_SERVICE,
//   service: "yashpawar12122004@gmail.com",
//   auth: {
//     user: "yashpawar12122004@gmail.com",
//     // user: process.env.SMPT_MAIL,
//     pass: "nwxb yuwl uioz dzkc",
//     // pass: 'yash1212204',
//   },
// });
export const createlawyerapplication = catchAsyncError(
  async (req, res, next) => {
    try {
      //for applying this role we need to isauthenticated usuer
      const userId = req.user._id;
      console.log("this is a user id :"+req.user._id)

      const cloudinary = await uploadOnCloudinary(req.file.path);
      const documents = cloudinary.secure_url;

      const applicationlawyer =await  Lawyer.create({
        userid:userId,
        documents,
      });
      console.log("this is a req.user.email:"+req.user.email)
      const emailto=req.user.email;
    //   const mailOptions = {
    //     from: "yashpawar12122004@gmail.com",
    //     to: emailto,
    //     subject: "New Lawyer Application",
    //     text: `A new lawyer application has been submitted by user with ID ${userId}. Please review it in the admin panel.`,
    //   };
    //   await transporter.sendMail(mailOptions);
      res.status(200).json({
        success: true,
        message: "your application created successfully",
        applicationlawyer
      });
    } catch (error) {
      return next(new Errorhandler(error?.message, 500));
    }
  }
);

export const approveforlawyer = catchAsyncError(async (req, res, next) => {
  try {
    const { id } = req.params;
    const lawyer = await Lawyer.findById(id);
    const { adminnotes } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) {
      return next(new Errorhandler("user not found", 500));
    }
    if (!lawyer) {
      return next(new Errorhandler("lawyer application not found "));
    }
    if (lawyer.status === "approved") {
      return next(new Errorhandler("your are unable to recreate lawyer"));
    }
    // if (lawyer.status === "rejected") {
    //   return next(new Errorhandler("already rejected "));
    // }
    lawyer.status = "approved";
    lawyer.adminnotes = adminnotes;
    lawyer.save();
    user.status = "lawyer";
    user.save();

    res.status(200).json({
      success: true,
      message: "approved lawyer for hearing the cases",
    });
  } catch (error) {
    return next(new Errorhandler(error?.message, 500));
  }
});
export const rejectapplication = catchAsyncError(async (req, res, next) => {
  try {
    const { id } = req.params;
    const lawyer = await Lawyer.findById(id);
    if (!lawyer) {
      return next(new Errorhandler("lawyyer not found ", 404));
    }
    if (lawyer.status === "rejected") {
      return next(new Errorhandler("already rejected", 404));
    }
    lawyer.status = "rejected";
    await lawyer.save();
    res.status(200).json({
        success:true,
        message:"rejected successfully",
        lawyer
    })
  } catch (error) {
    return next(new Errorhandler(error?.message, 500));
  }
});

export const getLawyerApplications = async (req, res, next) => {
  try {
    // Pagination options
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Search query
    const search = req.query.search;

    // Build MongoDB query
    const query = {};
    if (search) {
      query.$or = [
        { userid: { $regex: search, $options: "i" } }, // Search by user ID
        { documents: { $regex: search, $options: "i" } }, // Search by document
        { status: { $regex: search, $options: "i" } }, // Search by status
        { adminnotes: { $regex: search, $options: "i" } }, // Search by admin notes
      ];
    }

    // Get total count of documents matching the query
    const totalCount = await Lawyer.countDocuments(query);

    // Fetch lawyer applications with pagination
    const lawyerApplications = await Lawyer.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 }) // Sort by creation date descending
      .populate("userid"); // Populate user details

    // Calculate total pages
    const totalPages = Math.ceil(totalCount / limit);
console.log("this is data for testing :"+lawyerApplications)
    res.status(200).json({
      success: true,
      data: {
        lawyerApplications,
        pagination: {
          totalItems: totalCount,
          totalPages,
          currentPage: page,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        },
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
// import Lawyer from 'path/to/LawyerModel'; // Import Lawyer model from appropriate path


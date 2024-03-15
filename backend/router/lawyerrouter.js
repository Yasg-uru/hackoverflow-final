import express from 'express';
import upload from '../middleware/multermiddlware.js';
import { approveforlawyer, createlawyerapplication, getLawyerApplications, rejectapplication } from '../controller/lawyercontroller.js';
import { authorization, isAuthenticated } from '../middleware/authmiddleware.js';
const router =express.Router();
router.route('/apply').post(isAuthenticated,upload.single("documents"),createlawyerapplication)
router.route('/approve/:id').post(isAuthenticated,authorization('admin'),approveforlawyer)
router.route('/reject/:id').post(isAuthenticated,authorization("admin"),rejectapplication);
router.route("/getlawyer").get(isAuthenticated,authorization("admin"),getLawyerApplications);

export default router;

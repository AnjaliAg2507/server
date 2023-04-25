import { Router } from "express";
const router = Router();

/** import controllers */
import * as controller from '../controller/controller.js';

/** Questions Routes API */

router.route('/questions')
  .get(controller.getQuestions) /** GET Request */
  .post(controller.createNewQuestion)
  .delete(controller.dropQuestions) /** DELETE Request */
router.route('/questions/topic')
        .get(controller.getTopics)
router.route('/questions/:id')
        
  .put(controller.updateQuestionById) /** PUT Request */
  .delete(controller.deleteQuestionById) /** DELETE Request */
 

router.route('/practice')
        .get(controller.getPractice) /** GET Request */
        .post(controller.createNewPracticeQuestion) /** POST Request */
        .delete(controller.dropPractice) /** DELETE Request */
router.route('/practice/topic')
        .get(controller.getPTopics)
router.route('/practice/:id')
  .put(controller.updatePracticeQuestionById) /** PUT Request */
      .delete(controller.deletePracticeById) /** DELETE Request */
 

router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)
router.route('/result/topic')
        .get(controller.getRTopics)

export default router;
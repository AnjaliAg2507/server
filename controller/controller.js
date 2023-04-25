import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import Practice from "../models/practiceSchema.js";
import quizData from '../database/quizdata.js';
import practiceData from '../database/practiceData.js';


/*Quiz Questions API */

/*export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error occurred while fetching questions" });
    }
}*/

export async function getQuestions(req, res) {
  try {
    const { topic } = req.query;

    let filter = {};
    if (topic) {
      filter = { topic };
    }

    const q = await Questions.find(filter);
    res.json(q);
  } catch (error) {
    res.status(500).json({ error: "Server error occurred while fetching questions" });
    
  }
}

export async function getTopics(req, res) {
  try {
    const topics = await Questions.distinct('topic');
    res.json(topics);
  } catch (error) {
    res.status(500).json({ error: "Server error occurred while fetching topics" });
  }
}

export async function dropQuestions(req, res){
   try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error occurred while deleting questions" });
   }
}

export async function createNewQuestion(req, res) {
  try {
    const newQuestion = new Questions(req.body);
    await newQuestion.save();
    res.json({ msg: "Question created successfully", question: newQuestion });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error occurred while creating question" });
  }
}


export async function deleteQuestionById(req, res) {
  try {
    const questionId = req.params.id;
    await Questions.findByIdAndDelete(questionId);
    res.json({ msg: "Question deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error occurred while deleting question" });
  }
}

export async function updateQuestionById(req, res) {
  try {
    const questionId = req.params.id;
    const updatedQuestion = req.body;

    
    const question = await Questions.findByIdAndUpdate(
      questionId,
      updatedQuestion,
      { new: true }
    );

    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    res.json({ msg: "Question updated successfully", question: question });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error occurred while updating question" });
  }
}


/**  Practice Questions API  */
/*export async function getPractice(req, res){
    try {
        const q = await Practice.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}*/
export async function getPractice(req, res) {
  try {
    const { topic } = req.query;

    let filter = {};
    if (topic) {
      filter = { topic };
    }

    const q = await Practice.find(filter);
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}


export async function getPTopics(req, res) {
  try {
    const topics = await Practice.distinct('topic');
    res.json(topics);
  } catch (error) {
    res.status(500).json({ error: "Server error occurred while fetching topics" });
  }
}

export async function createNewPracticeQuestion(req, res) {
  try {
    const newPracticeQuestion = new Practice(req.body);
    await newPracticeQuestion.save();
    res.json({ msg: "Practice question created successfully", question: newPracticeQuestion });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error occurred while creating practice question" });
  }
}


export async function dropPractice(req, res){
   try {
        await Practice.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}
export async function deletePracticeById(req, res) {
  try {
    const questionId = req.params.id;
    await Practice.findByIdAndDelete(questionId);
    res.json({ msg: "Question deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error occurred while deleting question" });
  }
}

export async function updatePracticeQuestionById(req, res) {
   try {
    const questionId = req.params.id;
    const updatedQuestion = req.body;

    
    const question = await Practice.findByIdAndUpdate(
      questionId,
      updatedQuestion,
      { new: true }
    );

    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    res.json({ msg: "Question updated successfully", question: question });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error occurred while updating question" });
  }
}

/*Result Part API*/
export async function getResult(req, res){
    try {
    const { topic } = req.query;

    let filter = {};
    if (topic) {
      filter = { topic };
    }

    const q = await Results.find(filter);
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

export async function getRTopics(req, res) {
  try {
    const topics = await Results.distinct('topic');
    res.json(topics);
  } catch (error) {
    res.status(500).json({ error: "Server error occurred while fetching topics" });
  }
}


export async function storeResult(req, res) {
  try {
    const { rollNumber, studentName, topic, point, easy, medium, hard } = req.body;
    if (!rollNumber || !studentName || !topic || point === undefined || easy === undefined || medium === undefined || hard === undefined) {
      return res.status(400).json({ error: 'Invalid data provided' });
    }

    const result = new Results({ rollNumber, studentName, topic, point, easy, medium, hard });
    await result.save();
    res.status(201).json({ msg: 'Result saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save result' });
  }
}


export async function dropResult(req, res){
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

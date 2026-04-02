// import Result from "../model/Result.js";
// import { getAuth } from "@clerk/express";
// // create a result
// export const CreatemyResult = async (req, res) => {
//   try {
//     const { userId } = getAuth(req);

//     if (!userId) {
//       return res.status(401).json({
//         error: "Unauthorized"
//       });
//     }
//     const result = await Result.create({
//       ...req.body,
//       userId
//     });

//     res.json(result);
//   } catch (err) {
//     console.log("CREATE RESULT ERROR:", err);
//     res.status(500).json({ error: "Failed" });
//   }
// }
// // to get result for that logged in user
// export const getMyResults=async(req,res)=>{
//     const {userId}=getAuth(req);
//     const results=(await Result.find({userId})).sort({createdAt: -1});

//     res.json(results);
// }



import Result from "../model/Result.js";
import { getAuth } from "@clerk/express";

// ✅ CREATE RESULT
export const CreatemyResult = async (req, res) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Unauthorized",
      });
    }

    const result = await Result.create({
      ...req.body,
      userId,
    });

    res.status(201).json({
      success: true,
      result,
    });

  } catch (err) {
    console.log("CREATE RESULT ERROR:", err);
    res.status(500).json({
      success: false,
      error: "Failed to create result",
    });
  }
};



// ✅ GET MY RESULTS
export const getMyResults = async (req, res) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: "Unauthorized",
      });
    }

    const results = await Result
      .find({ userId })
      .sort({ createdAt: -1 }); // ✅ FIXED

    res.status(200).json({
      success: true,
      results,
    });

  } catch (error) {
    console.log("GET RESULTS ERROR:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch results",
    });
  }
};
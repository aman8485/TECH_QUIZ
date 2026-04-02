import User from "../model/User.js";
import { getAuth } from "@clerk/express";

//to get stats of a user
export const getStats=async(req,res)=>{
    try {
        const {userId}=getAuth(req);
        if(!userId){
            return res.status(401).json({
                message:"Unauthorized"
            });
        }
        const totaluser=await User.countDocuments();
        const loggedInuser=await User.countDocuments({
            isLoggedIn:true
        });

        res.json({
            totaluser,
            loggedInuser:loggedInuser,
            loggedInPercentage:totaluser > 0 ? ((loggedInuser/totaluser)*100).toFixed(2) : "0,.00"
        });

    } 
    catch (err) {
        console.log("Admins stats error:", err);
        res.status(500).json({
            message:"Server Error"
        })
        
    }
}



// import User from "../model/user.js";
// import { getAuth } from "@clerk/express";

// // to get stats of users
// export const getStats = async (req, res) => {
//   try {
//     const { userId } = getAuth(req);

//     if (!userId) {
//       return res.status(401).json({
//         message: "Unauthorized",
//       });
//     }

//     const totalUsers = await User.countDocuments();
//     const loggedInUsers = await User.countDocuments({
//       isLoggedIn: false,
//     });

//     res.json({
//       totalUsers,
//       loggedInUsers,
//       loggedInPercentage:
//         totalUsers > 0
//           ? Number(((loggedInUsers / totalUsers) * 100).toFixed(2))
//           : 0,
//     });
//   } catch (err) {
//     console.log("Admin stats error:", err);
//     res.status(500).json({
//       message: "Server Error",
//     });
//   }
// };

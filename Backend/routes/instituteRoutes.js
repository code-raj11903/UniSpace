import express from "express";
import { 
    registerInstitute, 
    loginInstitute, 
    logoutInstitute,
    getAllDepartments,
    addDepartment,
    deleteDepartment,
    getAllInstituteResources,
    addResource,
    updateResource,
    deleteResource,
    updateInstituteProfile, getInstituteDashboardData
} from "../controllers/instituteController.js";
import isAuthenticatedInstitute from "../middlewares/isAuthenticatedInstitute.js";

const router = express.Router();

// Institute registration and login
router.post("/register", registerInstitute);
router.post("/login", loginInstitute);
router.get("/logout", logoutInstitute);

// all info
router.get("/dashboard",isAuthenticatedInstitute, getInstituteDashboardData)

// Department management (by institute)
router.get("/department", isAuthenticatedInstitute, getAllDepartments);
router.post("/department/add", isAuthenticatedInstitute, addDepartment);
router.delete("/department/delete/:id", isAuthenticatedInstitute, deleteDepartment);


// Resource management (by institute)
router.get("/resources", isAuthenticatedInstitute, getAllInstituteResources);
router.post("/resources/add", isAuthenticatedInstitute, addResource);
// router.get("/resources/:id", isAuthenticatedInstitute, getInstituteResource);
router.put("/resources/update/:id", isAuthenticatedInstitute, updateResource);
router.delete("/resources/delete/:id", isAuthenticatedInstitute, deleteResource);

// Profile management
router.put("/profile", isAuthenticatedInstitute, updateInstituteProfile);

export default router;

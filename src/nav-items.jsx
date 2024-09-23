import { HomeIcon, UploadIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Upload from "./pages/Upload.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Upload",
    to: "/upload",
    icon: <UploadIcon className="h-4 w-4" />,
    page: <Upload />,
  },
];

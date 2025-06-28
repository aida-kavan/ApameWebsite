import { Bolt, Instagram ,Monitor, PenTool, Clapperboard, Printer, Camera, Video, Stamp, HelpCircle, TicketIcon, Phone} from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Figma } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";


export const Menus = [
  {
    name: "خدمات",
    subMenuHeading: ["دیجیتال", "غیردیجیتال"],
    subMenu: [
      {
        name: "سوشال مدیا",
        desc: "صفر تا صد مدیریت و ارتقاء ",
        icon: Instagram,
      },
      {
        name: "چاپ",
        desc: " چاپ روی هرچیزی!",
        icon: Printer,
      },
      {
        name: "سایت و سئو",
        desc: "طراحی وبسایت های بهینه‌شده",
        icon: Monitor,
      },
      {
        name: "عکاسی",
        desc: "عکاسی صنعتی و غیرصنعتی",
        icon: Camera,
      },
      {
        name: "طراحی گرافیک",
        desc: "طراحی هویت بصری برند شما",
        icon: PenTool,
      },
      {
        name: "فیلمبرداری",
        desc: "ساخت و تدوین ویدیو های حرفه ای ",
        icon: Video,
      },
      {
        name: "موشن گرافی",
        desc: "ساخت ویدیو های تعاملی",
        icon: Clapperboard,
      },
      {
        name: "تابلو و لیزر",
        desc: "لیزر روی متریال های متفاوت و ساخت تابلو ",
        icon: Stamp,
      },
    ],
    gridCols: 2,
  },

  {
    name: "پشتیبانی",
    subMenu: [
      {
        name: "مشاوره تلفنی",
        desc: "تماس تلفنی با مشاورین",
        icon: HelpCircle,
      },
      {
        name: "ارسال تیکت",
        desc: "مشاوره حرفه ای",
        icon: TicketIcon,
      },
      {
        name: "ارتباط با آپامه",
        desc: "تمام راه های ارتباطی",
        icon: Phone,
      },
    ],
    gridCols: 1,
  },
 
  {
    name: "وبلاگ",
  },
  {
    name: "درباره ی ما",
   link: "/aboutus"
  },
];
interface navbarMenuListtypes{
  id: number,
  title: string,
  link: string,
}


const navbarMenuList :navbarMenuListtypes[] = [
  {
    id: 1,
    title: "ارتباط با ما",
    link: "#",
  },
  {
    id: 2,
    title: "درباره ما",
    link: "#",
  },
  {
    id: 3,
    title: "محصولات",
    link: "#",
  },
  {
    id: 4,
    title: "خدمات",
    link: "#",
  },
  {
    id: 5,
    title: "خانه",
    link: "#",
  },
];
const wew = window.innerWidth;
console.log(wew);

const Navbar = () => {
  return <nav className=" flex items-center justify-center gap-16  text-lg mt-[-1.9%] w-[600px] ml-[38%]">
    {
      navbarMenuList.map((nav) => (
        <ul>
          <li key={nav.id}><a href={nav.link}>{nav.title}</a></li>
        </ul>
      ))
    }
  </nav>
}

export default Navbar
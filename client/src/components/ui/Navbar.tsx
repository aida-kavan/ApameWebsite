interface navbarMenuListtypes {
  id: number;
  title: string;
  link: string;
}

const navbarMenuList: navbarMenuListtypes[] = [
  {
    id: 1,
    title: "خانه",
    link: "#",
  },
  {
    id: 2,
    title: "خدمات",
    link: "#",
  },
  {
    id: 3,
    title: "محصولات",
    link: "#",
  },
  {
    id: 4,

    title: "درباره ما",
    link: "#",
  },
  {
    id: 5,
    title: "ارتباط با ما",
    link: "#",
  },
];


const Navbar = () => {
  return (
    <nav className=" flex items-center justify-center gap-16  ">
      {navbarMenuList.map((nav) => (
        <ul>
          <li key={nav.id}>
            <a href={nav.link} className="text-[16.5px] hover:text-[#4672e2e0] hover:peydaBold duration-200 hover:opacity-80">{nav.title}</a>
          </li>
        </ul>
      ))}
    </nav>
  );
};

export default Navbar;

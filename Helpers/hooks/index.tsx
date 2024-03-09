import { notFound, usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Helpers } from "..";
import { linkType } from "../types";

export const useResize = () => {
  const [val, setVal] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  };
  const [selectedOption, setSelectedOption] = useState<string>("--Choose--");
  const onOptionChangeHandler = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    console.log("User Selected Value - ", event.target.value);
    setSelectedOption(event.target.value);
  };

  useEffect(resizeTextArea, [val]);
  return { val, setVal, textAreaRef, selectedOption, onOptionChangeHandler };
};
export const useLinks = () => {
  const router = useRouter();
  const [links, setLinks] = useState<linkType[]>(Helpers.links);
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname.slice(1, pathname.length));
    setLinks((currLink) => {
      const newLink = currLink.map((x) =>
        x.href === pathname.slice(1, pathname.length)
          ? {
            ...x,
            isActive: true,
          }
          : {
            ...x,
            isActive: false,
          }
      );
      return newLink;
    });
  }, [pathname]);
  const LinkAction = (page: string) => {
    setLinks((currLink) => {
      const newLink = currLink.map((x) =>
        x.href === page
          ? {
            ...x,
            isActive: true,
          }
          : {
            ...x,
            isActive: false,
          }
      );
      return newLink;
    });
    router.push(`/${page}`);
  };
  return { links, LinkAction };
};
export const useScrollTop = () => {
  const pathname = usePathname();
  const scrollBtn = useRef<HTMLDivElement | null>(null);
  const isBrowser = () => typeof window !== "undefined";
  useEffect(() => {
    window.addEventListener("scroll", animateIn);
    return () => {
      window.removeEventListener("scroll", animateIn);
    };
  }, []);
  const animateIn = () => {
    if (!isBrowser()) return;
    if (scrollBtn.current) {
      if (
        document.body.scrollTop > 120 ||
        document.documentElement.scrollTop > 120
      ) {
        scrollBtn.current.style.bottom = "30px";
        scrollBtn.current.style.opacity = "1";
      } else {
        scrollBtn.current.style.bottom = "-20px";
        scrollBtn.current.style.opacity = "0";
      }
    }
  };
  const scrollTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return { scrollTop, scrollBtn, pathname };
};
export const useWhatsappLink = () => {
  const whatsappLink = useRef<HTMLDivElement | null>(null);
  const isBrowser = () => typeof window !== "undefined";
  useEffect(() => {
    window.addEventListener("scroll", animateIn);
    return () => {
      window.removeEventListener("scroll", animateIn);
    };
  }, []);
  const animateIn = () => {
    if (!isBrowser()) return;
    // if (whatsappLink.current) {
    //   if (
    //     document.body.scrollTop > 160 ||
    //     document.documentElement.scrollTop > 160
    //   ) {
    //     whatsappLink.current.style.bottom = "50px";
    //     whatsappLink.current.style.opacity = "1";
    //   } else {
    //     whatsappLink.current.style.bottom = "-50px";
    //     whatsappLink.current.style.opacity = "0";
    //   }
    // }
  };
  return { whatsappLink };
};
export const useFullWidth = (fullWidth: string) => {
  const [anim, setAnim] = useState<string>("");
  const timer = useRef<any | null>(null);
  useEffect(() => {
    timer.current = setTimeout(() => {
      setAnim(fullWidth);
    }, 2000);
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);
  return { anim, setAnim };
};
export const useStickyNav = (isStickyClass: string) => {
  const [sticky, setSticky] = useState("");
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    if (headerRef.current) {
      let number = headerRef.current.style.display === "" ? 120 : 175;
      const stickyClass = scrollTop >= number ? isStickyClass : "";
      setSticky(stickyClass);
    }
  };
  return { sticky, headerRef };
};
export const useSideBar = () => {
  const [sidebar, setSideBar] = useState(false);
  const sideContent = useRef<HTMLDivElement | null>(null);

  const show = () => {
    setSideBar(true);
    setTimeout(() => {
      if (sideContent.current) {
        sideContent.current.style.width = "70%";
        sideContent.current.style.visibility = "visible";
      }
    }, 700);
  };

  const hide = () => {
    setSideBar(false);
    setTimeout(() => {
      if (sideContent.current) {
        sideContent.current.style.width = "0%";
        sideContent.current.style.visibility = "hidden";
      }
    }, 400);
  };
  return { show, hide, sidebar, sideContent };
};
export const useValidRoute = (pathname: string): boolean => {
  const params = usePathname();
  const validRoutes: string[] = [
    "/localhost:3000",
    "/contact",
    "/",
    "/about",
    "/works/[id]",
    '/blog',
    "/blog" + params.slice(5, params.length),
    "/works" + params.slice(6, params.length),
  ];
  const checkValid = (pathname: string): boolean => {
    return validRoutes.includes(pathname);
  };
  return checkValid(pathname);
};

import axios from "axios";
import { FormEvent } from "react";
import { getBlog, getDocuments } from "./lib/firebase";
import { linkType, testimonialsType } from "./types";

export class Helpers {
  static filterText = (text: string): string => {
    const index = text.indexOf("%");
    const endStr = text.substring(index + 3, text.length);
    return text
      .split("")
      .filter((x) => x !== "%" && x !== "2" && x !== "0")
      .join("")
      .substring(0, index)
      .concat(" " + endStr);
  };
  static links: linkType[] = [
    {
      name: "Home",
      isActive: false,
      href: "",
    },
    {
      name: "About",
      isActive: false,
      href: "about",
    },
    {
      name: "Donate",
      isActive: false,
      href: "donate",
    },
    {
      name: "Gallery",
      isActive: false,
      href: "gallery",
    },
    {
      name: "Contact",
      isActive: false,
      href: "contact",
    },
  ];
  static getStack = (stack: string[]): string => {
    const data = stack.join(", ");
    return data;
  };
  static setGreeting = (): string => {
    const hour = new Date().getHours();

    let timeCheck =
      hour < 12
        ? "Good Morning"
        : hour < 18
          ? "Good Afternoon"
          : "Good Evening";

    return timeCheck;
  };
  static getBlogs = async () => {
    try {
      return await this.getData3();
    } catch (error) {
      return null;
    }
  }
  static getSingle = async (slug: string) => {
    const data = await this.getData2();
    if (!data) return;
    const single = data.find((x) => {
      return x.slug == slug;
    });
    return single;
  };
  static getSingleBlog = async (slug: string) => {
    const data = await this.getData3();
    if (!data) return;
    const single = data.find((x) => {
      return x.slug == slug;
    });
    return single;
  };
  static getData2 = async () => {
    try {
      return await getDocuments();
    } catch (error) {
      return null;
    }
  };
  static getData3 = async () => {
    try {
      return await getBlog()
    } catch (error) {
      return null;
    }
  };
  static handleSubmit = async (
    setStatus: any,
    setVal: any,
    val: string,
    e: FormEvent<HTMLFormElement>,
    enqueueSnackbar: any,
    selectedOption: string
  ) => {
    e.preventDefault();
    const data = {
      fullName: (
        e.target[
        0 as unknown as keyof typeof e.target
        ] as unknown as HTMLInputElement
      ).value,
      email: (
        e.target[
        1 as unknown as keyof typeof e.target
        ] as unknown as HTMLInputElement
      ).value,
      phone: (
        e.target[
        2 as unknown as keyof typeof e.target
        ] as unknown as HTMLInputElement
      ).value,
      choise: selectedOption,
      message: val,
    };

    if (data.fullName.trim() === "") {
      enqueueSnackbar("Full name cannot be empty", {
        variant: "error",
      });
      return;
    } else if (data.phone === "") {
      enqueueSnackbar("Specify a phone number we can reach you with", {
        variant: "error",
      });
      return;
    } else if (selectedOption === "--Choose--") {
      enqueueSnackbar("Select a service from the options", {
        variant: "error",
      });
      return;
    } else if (
      val === "" ||
      data.message.trim() === "" ||
      data.message.length < 10
    ) {
      enqueueSnackbar("Message cannot be empty or short", {
        variant: "error",
      });
      return;
    }

    setStatus("Sending....");
    try {
      const url = "/api/contact";
      const res = await axios.post(url, data);

      res.status === 200 &&
        enqueueSnackbar("Message successfully sent", {
          variant: "success",
        });
      console.log(res.status);
      console.log(res);
      setStatus("Message sent successfully");
      setTimeout(() => {
        const resetForm = e.target as HTMLFormElement;
        resetForm.reset();
        setVal("");
      }, 3000);
    } catch (error) {
      setStatus("...Error sending message");
      enqueueSnackbar(
        "There was an error sending message, try again: " + error,
        {
          variant: "error",
        }
      );
      console.log(error);
    }
    setStatus("Send Message");
  };
}

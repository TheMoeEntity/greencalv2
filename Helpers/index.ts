import axios from "axios";
import { FormEvent } from "react";
import { linkType } from "./types";
import { EnqueueSnackbar } from "notistack";

export class Helpers {
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
      name: "Events",
      isActive: false,
      href: "events",
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
  static handleSubmit = async (
    setStatus: any,
    setVal: any,
    val: string,
    e: FormEvent<HTMLFormElement>,
    enqueueSnackbar: EnqueueSnackbar,
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
      subject: (
        e.target[
        2 as unknown as keyof typeof e.target
        ] as unknown as HTMLInputElement
      ).value,
      message: val,
    };

    if (data.fullName.trim() === "") {
      enqueueSnackbar("Full name cannot be empty", {
        variant: "error",
      });
      return;
    } else if (data.subject === "") {
      enqueueSnackbar("Specify a subject", {
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

    setStatus("SENDING....");
    try {
      const url = "/api/contact";
      const res = await axios.post(url, data);

      res.status === 200 &&
        enqueueSnackbar("Message successfully sent", {
          variant: "success",
        });
      setStatus("MESSAGE SENT");
      setTimeout(() => {
        const resetForm = e.target as HTMLFormElement;
        resetForm.reset();
        setVal("");
      }, 3000);
    } catch (error) {
      setStatus("...ERROR SENDING MESSAGE");
      enqueueSnackbar(
        "There was an error sending message, try again. " + error,
        {
          variant: "error",
        }
      );
      console.log(error);
    }
    setStatus("SEND MESSAGE");
  };
}

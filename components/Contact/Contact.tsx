"use client";
import React, { useState } from "react";
import { BsGithub, BsGoogle, BsLinkedin } from "react-icons/bs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Terminal } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JsonData = JSON.stringify(data);
    const endPoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JsonData,
    };
    const response = await fetch(endPoint, options);

    if (response.status === 200) {
      console.log("Message Success");
      setEmailSubmitted(true);
    }
  };
  return (
    <section id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-5 mt-12 md:mt-24">
        <div className="col-span-1">
          <h5 className="text-mycolor-100 font-semibold mb-4  text-2xl ">
            İletişime Geç
          </h5>
          <p className="text-xl text-white font-roboto ">
            E-posta: arifeminkoklu@gmail.com
          </p>
          <p className="text-xl text-white font-roboto   ">
            Telefon: +90 541 460 2785
          </p>
          <div className="flex flex-row gap-4 mt-4">
            <BsGithub className="h-10 w-10 text-white" />
            <BsLinkedin className="h-10 w-10 text-white" />
            <BsGoogle className="h-10 w-10 text-white" />
          </div>
        </div>

        <div className="col-span-1">
          {emailSubmitted ? (
            <Alert className="bg-green-600 text-white">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Başarılı!</AlertTitle>
              <AlertDescription>
                Mailiniz başarıyla iletilmiştir. En yakın zamanda size döneceğiz.
              </AlertDescription>
            </Alert>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6 text-white">
                <Label className="font-poppins">Gönderici Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="bg-mycolor-800 mt-2 font-poppins"
                />
              </div>
              <div className="mb-6 text-white">
                <Label className="font-poppins">Konu</Label>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Konu"
                  required
                  className="bg-mycolor-800 mt-2 font-poppins"
                />
              </div>
              <div className="mb-6 text-white">
                <Label className="font-poppins">Mesaj</Label>
                <Textarea
                  className="bg-mycolor-800 mt-2 font-poppins"
                  name="message"
                  placeholder="Mesajınızı buraya yazınız..."
                  required
                />
              </div>
              <Button type="submit" className="font-poppins">
                Mesajı Gönder
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const fields = [
    {
      label: "Họ và tên",
      name: "name",
      type: "text",
      placeholder: "Nhập họ và tên",
    },
    {
      label: "Địa chỉ email",
      name: "email",
      type: "email",
      placeholder: "Nhập email",
    },
    {
      label: "Số ĐT",
      name: "phone",
      type: "text",
      placeholder: "Nhập số điện thoại",
    },
  ];

  return (
    <form className="space-y-6">
      <h3 className="text-xl font-bold uppercase text-green-600">
        Thông tin liên hệ
      </h3>

      {fields.map((field) => (
        <div className="grid gap-2" key={field.name}>
          <Label htmlFor={field.name} className="text-sm text-gray-500">
            {field.label} <span className="text-red-500">*</span>
          </Label>
          <Input
            id={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            required
            autoComplete="off"
          />
        </div>
      ))}

      <div className="grid gap-2">
        <Label htmlFor="message" className="text-sm text-gray-500">
          Bình luận <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Nội dung tin nhắn"
          required
          className="resize-none"
        />
      </div>

      <Button type="submit" className="w-fit">
        Gửi liên hệ
      </Button>
    </form>
  );
};

export default ContactForm;

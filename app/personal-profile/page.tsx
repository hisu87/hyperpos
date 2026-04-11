"use client";

import { ChangeEvent, useEffect, useState } from "react";
import GlobalManagementLayout from "@/app/global-management-layout";
import { Camera, Save, ShieldCheck, User, LogOut } from "lucide-react";

type ProfileForm = {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  chainName: string;
  bio: string;
};

const defaultProfile: ProfileForm = {
  fullName: "Enterprise Admin",
  email: "admin@hyperpos.com",
  phone: "+84 901 234 567",
  role: "Global Operations Manager",
  chainName: "GLOBAL FLEET",
  bio: "Điều phối hoạt động chuỗi cửa hàng và vận hành đội ngũ theo thời gian thực.",
};

export default function PersonalProfilePage() {
  const [profile, setProfile] = useState<ProfileForm>(defaultProfile);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (avatarPreview?.startsWith("blob:")) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [avatarPreview]);

  const handleChange = (field: keyof ProfileForm, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    if (avatarPreview?.startsWith("blob:")) {
      URL.revokeObjectURL(avatarPreview);
    }

    const previewUrl = URL.createObjectURL(file);
    setAvatarPreview(previewUrl);
  };

  return (
    <GlobalManagementLayout>
      <div className="mx-auto max-w-5xl">
        <h1 className="mt-2 mb-2 text-4xl font-semibold text-white">
          Personal Profile
        </h1>
        <p className="mb-8 text-white/60">
          Quản lý avatar và thông tin cá nhân của tài khoản đang đăng nhập.
        </p>

        <div className="mb-8 grid gap-8 lg:grid-cols-[280px_1fr]">
          <section className="rounded-3xl border border-white/10 bg-[#10161b] p-6">
            <h2 className="mb-4 text-lg font-semibold text-white">Avatar</h2>
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-[#00D084]/30 bg-[#00D084]/10">
                {avatarPreview ? (
                  // Preview selected avatar before saving.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={avatarPreview}
                    alt="Avatar preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-5xl font-bold text-[#00D084]">H</span>
                )}
              </div>
              <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#00D084]/30 bg-[#00D084]/10 px-4 py-2 text-sm font-medium text-[#00D084] transition hover:bg-[#00D084]/20">
                <Camera className="h-4 w-4" />
                Đổi avatar
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarChange}
                />
              </label>
              <p className="text-center text-xs text-white/45">
                PNG, JPG tối đa 5MB
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-[#10161b] p-6">
            <h2 className="mb-4 text-lg font-semibold text-white">
              Thông tin cá nhân
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="Họ và tên"
                value={profile.fullName}
                onChange={(value) => handleChange("fullName", value)}
              />
              <Field
                label="Email"
                type="email"
                value={profile.email}
                onChange={(value) => handleChange("email", value)}
              />
              <Field
                label="Số điện thoại"
                value={profile.phone}
                onChange={(value) => handleChange("phone", value)}
              />
              <Field
                label="Vai trò"
                value={profile.role}
                onChange={(value) => handleChange("role", value)}
              />
              <Field
                label="Chain"
                value={profile.chainName}
                onChange={(value) => handleChange("chainName", value)}
              />
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-white/80">
                  Giới thiệu
                </label>
                <textarea
                  value={profile.bio}
                  onChange={(event) => handleChange("bio", event.target.value)}
                  rows={4}
                  className="w-full rounded-2xl border border-white/10 bg-[#0f1419] px-4 py-3 text-sm text-white outline-none transition focus:border-[#00D084]/40"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="grid gap-4 rounded-3xl border border-white/10 bg-[#10161b] p-6 md:grid-cols-3">
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00D084] px-5 py-3 text-sm font-semibold text-[#03150e] transition hover:bg-[#2ae8a4]">
            <Save className="h-4 w-4" />
            Lưu thay đổi
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-[#0f1419] px-5 py-3 text-sm font-medium text-white/80 transition hover:border-[#00D084]/40 hover:text-[#c4ffe4]">
            <ShieldCheck className="h-4 w-4" />
            Đổi mật khẩu
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-5 py-3 text-sm font-medium text-red-200 transition hover:bg-red-500/20">
            <LogOut className="h-4 w-4" />
            Đăng xuất
          </button>
        </div>
      </div>
    </GlobalManagementLayout>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white/80">
        {label}
      </label>
      <div className="relative">
        <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-[#0f1419] py-3 pl-10 pr-4 text-sm text-white outline-none transition focus:border-[#00D084]/40"
        />
      </div>
    </div>
  );
}

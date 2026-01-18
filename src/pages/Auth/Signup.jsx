import { useEffect, useMemo, useState } from "react";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Button } from "../../components/ui/Button";
import { apiService } from "../../api/api";
import { ca } from "zod/locales";

const cardClass =
  "rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]";

const roleOptions = [
  { value: "user", label: "고객" },
  { value: "expert", label: "전문가" },
];

export default function Signup() {
  const [role, setRole] = useState("user");
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    phone_number: "",
    expertise: "",
  });
  const [expertiseOptions, setExpertiseOptions] = useState([]);
  const [loadingExpertise, setLoadingExpertise] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      if( role === "expert") {
        const payload = {
          role: "expert",
          email: form.email,
          password: form.password,
          name: form.name,
          phone_number: form.phone_number,
          expertise: form.expertise,
        }
        const response = await apiService.signupExpert(payload);
        console.log("Expert signup successful:", response);
      } else {
        const payload = {
          role: "user",
          email: form.email,
          password: form.password,
          name: form.name,
          phone_number: form.phone_number
        }
        const response = await apiService.signupUser(payload);
        console.log("User signup successful:", response);
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  }

  useEffect(() => {
    if (role !== "expert") return;
    setLoadingExpertise(true);
    setError(null);
    apiService
      .getExpertiseAll()
      .then((res) => {
        const list = res?.data?.data ?? res?.data ?? [];
        console.log(list);
        const uniques = Array.from(
          new Set(
            list
              .map((item) => item.expertise)
              .filter(Boolean)
          )
        );
        setExpertiseOptions(uniques);
      })
      .catch((err) => setError(err))
      .finally(() => setLoadingExpertise(false));
  }, [role]);

  const isExpert = useMemo(() => role === "expert", [role]);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">Sign up</h1>
        <p className="text-sm text-slate-600">
          고객 또는 전문가 유형을 선택해 정보를 입력하세요.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[320px,1fr]">
        <div className={cardClass}>
          <div className="mb-4 text-sm font-semibold text-slate-900">
            회원 유형 선택
          </div>
          <Select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            aria-label="회원 유형"
          >
            {roleOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
          {isExpert ? (
            <p className="mt-3 text-xs text-slate-500">
              전문가를 선택하면 전문 분야 목록을 불러옵니다.
            </p>
          ) : (
            <p className="mt-3 text-xs text-slate-500">
              고객은 이메일과 기본 정보만 입력하면 됩니다.
            </p>
          )}
        </div>

        <div className={cardClass}>
          <div className="mb-4 space-y-1">
            <div className="text-sm font-semibold text-slate-900">
              {isExpert ? "전문가 정보" : "고객 정보"}
            </div>
            <p className="text-xs text-slate-500">
              모든 필드를 정확히 입력해 주세요.
            </p>
          </div>
          <div className="space-y-3">
            <Input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange("email")}
            />
            <Input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange("password")}
            />
            <Input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={handleChange("name")}
            />
            <Input
              type="text"
              placeholder="Phone number"
              value={form.phone_number}
              onChange={handleChange("phone_number")}
            />

            {isExpert && (
              <Select
                value={form.expertise}
                onChange={handleChange("expertise")}
                disabled={loadingExpertise || !!error}
              >
                <option value="">
                  {loadingExpertise
                    ? "전문 분야 로딩 중..."
                    : error
                    ? "전문 분야를 불러오지 못했습니다"
                    : "전문 분야를 선택하세요"}
                </option>
                {expertiseOptions.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </Select>
            )}

            <Button className="w-full" type="button" onClick={handleSubmit}>
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

const cardStyle =
  "rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]";

export default function Login() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">Sign in</h1>
        <p className="text-sm text-slate-600">
          고객 또는 전문가 계정을 선택해서 로그인하세요.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className={cardStyle}>
          <div className="mb-4 space-y-1">
            <div className="text-sm font-semibold text-slate-900">고객 로그인</div>
            <p className="text-xs text-slate-500">
              전문가를 찾고 예약하려는 고객을 위한 로그인.
            </p>
          </div>
          <div className="space-y-3">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button className="w-full">Sign in as Customer</Button>
          </div>
        </div>

        <div className={cardStyle}>
          <div className="mb-4 space-y-1">
            <div className="text-sm font-semibold text-slate-900">전문가 로그인</div>
            <p className="text-xs text-slate-500">
              프로필 관리와 일정 확인을 위한 전문가 로그인.
            </p>
          </div>
          <div className="space-y-3">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button className="w-full">Sign in as Expert</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

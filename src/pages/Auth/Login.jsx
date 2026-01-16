import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export default function Login() {
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Sign in</h1>
        <p className="text-sm text-slate-600">
          Continue with your ExpertHub account.
        </p>
      </div>
      <div className="space-y-4">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button className="w-full">Sign in</Button>
        <Button className="w-full" variant="outline">
          Continue with Kakao
        </Button>
      </div>
    </div>
  );
}

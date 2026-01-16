import { Card } from "../../components/ui/Card";

export default function OAuthCallback() {
  return (
    <Card className="mx-auto max-w-lg text-center">
      <h1 className="text-lg font-semibold text-slate-900">
        Completing sign-in
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        Please wait while we finish logging you in.
      </p>
    </Card>
  );
}

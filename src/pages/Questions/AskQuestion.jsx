import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Textarea } from "../../components/ui/Textarea";

export default function AskQuestion() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Ask a question
        </h1>
        <p className="text-sm text-slate-600">
          Provide clear context to get faster, higher-quality answers.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Title</label>
          <Input placeholder="Enter a concise question title" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Category</label>
          <Select>
            <option>Product Strategy</option>
            <option>Marketing</option>
            <option>Sales</option>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Details</label>
          <Textarea placeholder="Share the background and what you want to learn." />
        </div>
        <Button className="w-full">Submit question</Button>
      </div>
    </div>
  );
}

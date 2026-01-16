import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export function TimeSlotPicker({ slots }) {
  return (
    <Card className="space-y-3">
      <h3 className="text-sm font-semibold text-slate-900">Pick a time</h3>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {slots.map((slot) => (
          <Button key={slot} variant="outline" size="sm">
            {slot}
          </Button>
        ))}
      </div>
    </Card>
  );
}

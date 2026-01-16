import { AppointmentCalendar } from "../../components/domain/AppointmentCalendar";
import { TimeSlotPicker } from "../../components/domain/TimeSlotPicker";
import { Button } from "../../components/ui/Button";
import { Textarea } from "../../components/ui/Textarea";

export default function AppointmentCreate() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Schedule an appointment
        </h1>
        <p className="text-sm text-slate-600">
          Choose a date and time, then send an appointment request.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <AppointmentCalendar selectedDate="2026-01-14" />
        <div className="space-y-4">
          <TimeSlotPicker
            slots={["10:00", "11:00", "14:00", "16:00", "17:30"]}
          />
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">
              Session notes
            </label>
            <Textarea placeholder="Share a short summary of what you want to discuss." />
          </div>
          <Button className="w-full">Send appointment request</Button>
        </div>
      </div>
    </div>
  );
}

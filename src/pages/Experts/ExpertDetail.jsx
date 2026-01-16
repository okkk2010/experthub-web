import { Badge } from "../../components/ui/Badge";
import { ButtonLink } from "../../components/ui/ButtonLink";
import { Card } from "../../components/ui/Card";
import { Tag } from "../../components/ui/Tag";

export default function ExpertDetail() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge>Expert</Badge>
            <Tag>Product Strategy</Tag>
          </div>
          <h1 className="text-2xl font-semibold text-slate-900">Yoonseo Jung</h1>
          <p className="text-sm text-slate-600">
            Former startup CPO with hands-on experience in product strategy and
            org leadership.
          </p>
          <div className="flex flex-wrap gap-2">
            <Tag>Roadmap</Tag>
            <Tag>Research</Tag>
            <Tag>Org design</Tag>
          </div>
        </div>
        <Card className="space-y-3">
          <h2 className="text-base font-semibold text-slate-900">
            Session details
          </h2>
          <p className="text-sm text-slate-600">
            30 min - $50 - Zoom or phone call
          </p>
          <ButtonLink to="/appointments/1" className="w-full">
            Book an appointment
          </ButtonLink>
        </Card>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-900">Highlights</h2>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>Former CPO at a SaaS startup</li>
          <li>Led 12 product launches and growth initiatives</li>
          <li>200+ leadership coaching sessions</li>
        </ul>
      </section>
    </div>
  );
}

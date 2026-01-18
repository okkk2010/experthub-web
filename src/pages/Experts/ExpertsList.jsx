import { useEffect, useState } from "react";
import { ExpertCard } from "../../components/domain/ExpertCard";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { apiService } from "../../api/api";

// const experts = [
//   {
//     name: "Jungmin Lee",
//     headline: "B2B Marketing - 10 years",
//     tags: ["Lead gen", "Content", "Funnel"],
//   },
//   {
//     name: "Jihoon Oh",
//     headline: "Product leadership - Former CPO",
//     tags: ["Roadmap", "Growth", "Org design"],
//   },
// ];

const adaptExpertCard = (expert) => ({
  id: expert.id,
  name: expert.name,
  expertise: expert.expertise,
  email: expert.email,
  phone_number: expert.phone_number,
});

export default function ExpertsList() {

  const [ experts, setExperts ] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching experts from API");
    let mounted = true;
    apiService.getExpertAll()
      .then((response) => {
        if (mounted) {
          console.log("Received experts:", response.data.message);
          const adaptedExperts = response.data.data.map(adaptExpertCard);
          setExperts(adaptedExperts);
          setLoading(false);
        }
      })
      .catch((err) => mounted && setError(err))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Find an expert
        </h1>
        <p className="text-sm text-slate-600">
          Book a 1:1 appointment with a trusted expert.
        </p>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <Input placeholder="Search by name or keyword" />
        <Select className="md:w-48">
          <option>Popular</option>
          <option>Top rated</option>
          <option>Newest</option>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {experts.map((res) => (
          <ExpertCard
            key={res.id}
            name={res.name}
            headline={res.expertise}
            tags={res.tags}
          />
        ))}
      </div>
    </div>
  );
}

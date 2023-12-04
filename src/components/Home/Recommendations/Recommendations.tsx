import AppButton from '@/components/UI/Button/AppButton';
import RecommendationsCard from '@/components/UI/Cards/RecommendationsCard';


const Recommendations = () => {
  return (
    <section className="mt-10">
    <div className="flex items-center justify-between mb-7 mx-10">
      <h1 className="text-[#E1BD8A] text-3xl font-bold">Recommendations events</h1>
      <AppButton text="See All" className="border-2 border-[#887254]" />
    </div>

    <div className="flex gap-5 overflow-x-scroll no-scrollbar whitespace-nowrap ml-10">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((card) => {
        return <RecommendationsCard key={card} />;
      })}
    </div>
  </section>
  )
}

export default Recommendations
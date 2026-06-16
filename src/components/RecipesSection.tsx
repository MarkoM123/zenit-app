import { recipes } from "@/src/data/recipes";

export default function RecipesSection() {
  return (
    <section
      id="recipes"
      className="py-24"
    >
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-5xl font-bold">
          Recepti
        </h2>

        <div className="mt-12 space-y-4">
          {recipes.map((recipe) => (
            <details
              key={recipe.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <summary className="cursor-pointer text-xl font-semibold">
                {recipe.title}
              </summary>

              <p className="mt-4 text-zinc-400">
                {recipe.content}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
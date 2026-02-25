export default function TournamentForm() {
  async function createTournament(formData: FormData) {
    "use server";

    const tournament = {
      name: formData.get("name"),
      location: formData.get("location"),
      date: formData.get("date"),
    };

    console.log(tournament);
  }

  return (
    <div className="mx-auto flex min-h-[500px] w-11/12 max-w-lg flex-col justify-center rounded-lg bg-white p-8 shadow-lg ring-2 ring-blue-500/50 dark:bg-slate-900">
      <h1 className="mb-8 text-center text-5xl font-extrabold tracking-wide drop-shadow-lg">
        Create a New Tournament
      </h1>
      <form
        className="flex w-full flex-col space-y-6 text-lg"
        action={createTournament}
      >
        <div className="flex w-full flex-col space-y-1">
          <label
            htmlFor="name"
            className="w-full text-left font-medium text-gray-700 dark:text-gray-200"
          >
            Tournament Name
          </label>
          <input
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            type="text"
            name="name"
            id="name"
            placeholder="Special Tournament 2026"
          />
        </div>

        <div className="flex w-full flex-col space-y-1">
          <label
            htmlFor="location"
            className="w-full text-left font-medium text-gray-700 dark:text-gray-200"
          >
            Location
          </label>
          <input
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            type="text"
            name="location"
            id="location"
            placeholder="City, State, Country"
          />
        </div>

        <div className="flex w-full flex-col space-y-1">
          <label
            htmlFor="date"
            className="w-full text-left font-medium text-gray-700 dark:text-gray-200"
          >
            Date
          </label>
          <input
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            type="date"
            name="date"
            id="date"
          />
        </div>

        <input
          className="mt-6 w-full rounded bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          type="submit"
          value="Create Tournament"
        />
      </form>
    </div>
  );
}

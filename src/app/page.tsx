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
    <div className="mx-auto flex w-8/9 flex-col items-center rounded-lg bg-white p-8 pt-10 pb-10 shadow-lg ring-2 shadow-blue-500/50 ring-blue-500/50 lg:w-1/2 dark:bg-slate-900">
      <h1 className="text-center text-4xl font-bold">
        Create a New Tournament
      </h1>
      <form
        className="flex w-full flex-col space-y-1 lg:w-1/2"
        action={createTournament}
      >
        <label htmlFor="name">Tournament Name</label>
        <input
          className="rounded border-2 border-black bg-white p-1 text-black"
          type="text"
          name="name"
          id="name"
          placeholder="Special Tournament 2026"
        />

        <label htmlFor="location">Location</label>
        <input
          className="rounded border-2 border-black bg-white p-1 text-black"
          type="text"
          name="location"
          id="location"
          placeholder="City, State, Country"
        />

        <label htmlFor="date">Date</label>
        <input
          className="rounded border-2 border-black bg-white p-1 text-black"
          type="date"
          name="date"
          id="date"
        />

        <input
          className="mt-2 rounded border-2 border-black bg-blue-300 p-2 text-xl font-bold text-black"
          type="submit"
          value="Create Tournament"
        />
      </form>
    </div>
  );
}

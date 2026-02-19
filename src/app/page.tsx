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
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center">Create New Tournament</h1>
      <form
        className="flex flex-col w-4/5 lg:w-1/4 space-y-1"
        action={createTournament}
      >
        <label htmlFor="name">Tournament Name</label>
        <input
          className="bg-white p-1 text-black border-2 border-black rounded"
          type="text"
          name="name"
          id="name"
          placeholder="Special Tournament 2026"
        />

        <label htmlFor="location">Location</label>
        <input
          className="bg-white p-1 text-black border-2 border-black rounded"
          type="text"
          name="location"
          id="location"
          placeholder="City, State, Country"
        />

        <label htmlFor="date">Date</label>
        <input
          className="bg-white p-1 text-black border-2 border-black rounded"
          type="date"
          name="date"
          id="date"
        />

        <input
          className="text-xl font-bold bg-blue-300 text-black rounded border-black border-2 p-2 mt-2"
          type="submit"
          value="Create Tournament"
        />
      </form>
    </div>
  );
}

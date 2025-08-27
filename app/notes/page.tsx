import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";

const NotesPage = async () => {
  const queryClient = new QueryClient;
  
  await queryClient.prefetchQuery({
    queryKey: ["note"],
    queryFn: () => fetchNotes(1, 12, ""),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  )
};

export default NotesPage;


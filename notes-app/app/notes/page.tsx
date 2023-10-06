import { Card, Box, Typography } from '@mui/material';
import Link from 'next/link';
import PocketBase from 'pocketbase';
import CreateNote from './[id]/CreateNote';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs12',
  preferredRegion = 'auto';

const getNotes = async () => {
  const db = new PocketBase('http://127.0.0.1:8090');
  const data = await db.collection('notes_app').getList();

  return data?.items as any[];
};

type NoteProps = { id: string; title: string; description: string };
export const Note = (props: NoteProps) => {
  return (
    <Link href={`/notes/${props.id}`}>
      <Card sx={{ p: 4, mb: 2 }}>
        <Typography variant='h5' gutterBottom>
          {props.title}
        </Typography>
        <Typography variant='h5' gutterBottom>
          {props.description}
        </Typography>
      </Card>
    </Link>
  );
};

const NotesPage = async () => {
  const notes = await getNotes();
  return (
    <Box>
      <Typography variant='h1' component='h1' gutterBottom>
        Notes App
      </Typography>
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
      <CreateNote />
    </Box>
  );
};

export default NotesPage;

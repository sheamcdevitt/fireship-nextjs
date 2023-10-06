import { Box } from '@mui/material';
import React from 'react';
import { Note } from '../page';
import PocketBase from 'pocketbase';

const getNote = async (id: string) => {
  const db = new PocketBase('http://127.0.0.1:8090');
  const data = await db.collection('notes_app').getOne(id);

  return data as any;
};

const NotePage = async ({ params }: any) => {
  const note = await getNote(params.id);
  return (
    <Box>
      <Note {...note} />
    </Box>
  );
};

export default NotePage;

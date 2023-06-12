// Detail

import ModeSelect from '../../components/ModeSelect'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'

const Board = () => {
  return (
    <Container disabledGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: '48px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <ModeSelect />
      </Box>
      <BoardBar />
      <BoardContent />
    </Container>
  )
}

export default Board
import { createFileRoute } from '@tanstack/react-router'
import { ToDos } from '../pages/ToDos'

export const Route = createFileRoute('/todos')({
  component: ToDos,
})
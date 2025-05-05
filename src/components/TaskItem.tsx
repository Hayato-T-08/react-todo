import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import { FC, memo } from 'react'
import { useMutateTask } from '../hooks/useMutateTask'
import useStore from '../store'

type Props = {
  id: number
  title: string
}

const TaskItemMemo: FC<Props> = ({ id, title }) => {
  const updateTask = useStore((state) => state.updateEditedTask)
  const { deleteTaskMutation } = useMutateTask()
  return (
    <li className="my-3">
      <span className="font-bold">{title}</span>
      <div className="float-right ml-20">
        <PencilIcon
          className="h-5 w-5 mx-1 text-blue-500 cursor-pointer"
          onClick={() => updateTask({ id, title })}
        />
        <TrashIcon
          className="h-5 w-5 text-blue-500 cursor-pointer"
          onClick={() => deleteTaskMutation.mutate(id)}
        />
      </div>
    </li>
  )
}

export const TaskItem = memo(TaskItemMemo)

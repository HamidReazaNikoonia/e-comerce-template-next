
interface TagSelectorProps {
  onSelectTags: (selectedTags: string[]) => void
}

const availableTags = ['هنری', 'البسه', 'اجسام', 'فیلم', 'آموزشی', 'ورزشی']

export default function TagSelector({ onSelectTags }: TagSelectorProps) {
  const handleTagChange = (tag: string, isChecked: boolean) => {
    onSelectTags(
      isChecked
        ? [...availableTags.filter(t => document.getElementById(t) instanceof HTMLInputElement && (document.getElementById(t) as HTMLInputElement).checked), tag]
        : availableTags.filter(t => t !== tag && document.getElementById(t) instanceof HTMLInputElement && (document.getElementById(t) as HTMLInputElement).checked)
    )
  }

  return (
    <div className="space-y-2 flex flex-col items-end pt-4">
      {availableTags.map(tag => (
        <div key={tag} className="flex items-center pt-2">
          <label htmlFor={tag} className="mr-3 text-xs">
            {tag}
          </label>
          <input
            type="checkbox"
            id={tag}
            onChange={(checked) => handleTagChange(tag, checked as unknown as boolean)}
          />
        </div>
      ))}
    </div>
  )
}


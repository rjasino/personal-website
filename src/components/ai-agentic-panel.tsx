import { aiAgenticEngineering } from '@/data/resume'

const groups = [
  { label: 'Tools', values: aiAgenticEngineering.tools },
  { label: 'Methods', values: aiAgenticEngineering.methods },
  { label: 'Model strategy', values: aiAgenticEngineering.modelStrategy },
]

export function AiAgenticPanel() {
  return (
    <section aria-labelledby="ai-agentic-heading" className="ai-agentic-panel" role="region">
      <p className="eyebrow">Beyond the toolkit</p>
      <h2 id="ai-agentic-heading">AI &amp; Agentic Engineering</h2>
      <div className="ai-agentic-groups">
        {groups.map(({ label, values }) => (
          <div className="ai-agentic-group" key={label}>
            <h3>{label}</h3>
            <ul>
              {values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

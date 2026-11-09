import { asdFramework } from '@/data/resume'

export function AsdLayers() {
  return (
    <section aria-labelledby="asd-layers-title" className="asd-section">
      <p className="eyebrow">Agentic Systems Design</p>
      <h2 id="asd-layers-title">Three layers. One pipeline.</h2>
      <p className="asd-pipeline">AWD → SDD → APA</p>

      <div className="asd-layer-grid">
        {asdFramework.layers.map((layer, index) => (
          <article
            className="asd-layer-card"
            data-asd-layer={layer.id}
            key={layer.id}
          >
            <p className="asd-layer-label">
              Layer 0{index + 1} / {layer.abbreviation}
            </p>
            <h3>{layer.name}</h3>
            <p className="asd-layer-description">{layer.description}</p>

            <dl className="asd-detail-list">
              <dt>Core act</dt>
              <dd>{layer.coreAct}</dd>
              <dt>Artifact</dt>
              <dd>{layer.artifact}</dd>
              <dt>Human role</dt>
              <dd>{layer.humanRole}</dd>
              <dt>Failure mode</dt>
              <dd>{layer.failureMode}</dd>
              <dt>Maturity signal</dt>
              <dd>{layer.maturitySignal}</dd>
            </dl>

            <blockquote>{layer.keyPrinciple}</blockquote>
          </article>
        ))}
      </div>
    </section>
  )
}

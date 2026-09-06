import { AGENT_NAME, PHONE_DISPLAY, SITE_URL } from '@/lib/seo/site'

type HowToStep = {
  name: string
  text: string
}

type HowToSchemaProps = {
  name: string
  description: string
  steps: HowToStep[]
}

export default function HowToSchema({ name, description, steps }: HowToSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0',
    },
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: SITE_URL,
    })),
    tool: [
      {
        '@type': 'HowToTool',
        name: `Call ${AGENT_NAME} at ${PHONE_DISPLAY}`,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  )
}

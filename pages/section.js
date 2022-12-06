import { ArrowPathIcon, BeakerIcon, BoltIcon, ChartBarIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Automate Marketing and Sales Systems',
    description:
      'Book meetings on autopilot leveraging tools and systems and close more deals',
      icon: ArrowPathIcon,
  },
  {
    name: 'App Development',
    description:
      'Go to market quickly and effectively through code or low code development',
    icon: BeakerIcon,
  },
  {
    name: 'Integrate Applications',
    description:
      'Share data across all of your applications to reduce manual data entry and have a single source of mission critical data.',
    icon: BoltIcon,
  },
  {
    name: 'Content Strategy',
    description:
      'Leverge social channels to bring your business inbound leads on a consistent basis',
    icon: ChartBarIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to go to market</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          We help construct the technical systems required for you to scale.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

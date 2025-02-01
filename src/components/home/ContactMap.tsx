import { ExternalLink } from 'lucide-react';


export function ContactMap() {
  const googleMapsUrl = `https://www.google.com/maps/place/Sandhya+Driving+Institute/@27.7026935,83.2646769,17z/data=!4m12!1m5!3m4!2zMjfCsDQyJzA5LjciTiA4M8KwMTUnNTIuOCJF!8m2!3d27.7026935!4d83.2646769!3m5!1s0x399689c31ffb7d85:0x84ccdda123fcaa7a!8m2!3d27.7024835!4d83.265757!16s%2Fg%2F11h2tc3bkc?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D`;

  return (
    <div className="flex items-center justify-center h-full min-h-[400px] bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
      >
        <ExternalLink className="w-5 h-5" />
        View Location on Google Maps
      </a>
    </div>
  );
}
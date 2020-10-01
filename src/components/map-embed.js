import React from "react"

const MapEmbed = ({href, embed, title}) => {
    
    return (
      <div className="cc-map_embed">
        <a
          className="cc-map_embed--link"
          href={href}
          target="_blank"
        >
          <strong>Open map:</strong> {title}
        </a>

        <iframe
          title={title}
          src={embed}
          width="100%"
          height="480"
          frameBorder="0"
          className="cc-clip-1 cc-map_embed--map"
          style={{ border: 0 }}
        />
      </div>
    )
}

export default MapEmbed

export default // Info View handler
class InfoView {
  renderInfoList(infoList, listElement, type) {
    const tab = "   ";
    console.log(infoList);
    if (type === "capsules") {
      listElement.innerHTML = infoList
        .map((info) => {
          // console.log(Object.keys(info));
          let container = "<li>";
          container += `<p>Id: ${info["id"]}</p>`;
          container += `<p>Serial: ${info["serial"]}</p>`;
          container += `<p>Type: ${info["type"]}</p>`;
          container += `<p>Status: ${info["status"]}</p>`;
          container += `<p>Reuse Count: ${info["reuse_count"]}</p>`;
          container += `<p>Water Landings: ${info["water_landings"]}</p>`;
          container += `<p>Land Landings: ${info["land_landings"]}</p>`;
          // console.log(Object.keys(info["launches"]));
          for (const key in Object.keys(info["launches"])) {
            container += `<p>Launch(${parseInt(key) + 1}): ${
              info["launches"][key]
            }</p>`;
          }
          container += `<p>Last Update: ${info["last_update"]}</p>`;
          return container;
        })
        .join("");
    } else if (type === "company") {
      let container = "<li>";
      container += `<p>Company: ${infoList["name"]}</p>`;
      container += `<p>Address: ${infoList["headquarters"]["address"]}</p>`;
      container += `<p>City: ${infoList["headquarters"]["city"]}</p>`;
      container += `<p>State: ${infoList["headquarters"]["state"]}</p>`;
      container += `<p>Summary: ${infoList["summary"]}</p>`;
      container += `<p>CEO: ${infoList["ceo"]}</p>`;
      container += `<p>COO: ${infoList["coo"]}</p>`;
      container += `<p>CTO: ${infoList["cto"]}</p>`;
      container += `<p>CTO Propulsion: ${infoList["cto_propulsion"]}</p>`;
      container += `<p>Employees: ${infoList["employees"]}</p>`;
      container += `<p>Founded: ${infoList["founded"]}</p>`;
      container += `<p>Founder: ${infoList["founder"]}</p>`;
      container += `<p>Launch Sites: ${infoList["launch_sites"]}</p>`;
      container += `<p>Test Sites: ${infoList["test_sites"]}</p>`;
      container += `<p>Vehicles: ${infoList["vehicles"]}</p>`;
      container += `<p>Valuation: ${infoList["valuation"]}</p>`;
      container += `<p><a href="${infoList["links"]["elon_twitter"]}" target="_blank">Elon Twitter</a></p>`;
      container += `<p><a href="${infoList["links"]["twitter"]}" target="_blank">SpaceX Twitter</a></p>`;
      container += `<p><a href="${infoList["links"]["flickr"]}" target="_blank">Flicker</a></p>`;
      container += `<p><a href="${infoList["links"]["website"]}" target="_blank">SpaceX</a></p>`;
      listElement.innerHTML = container;
    } else if (type === "cores") {
      listElement.innerHTML = infoList
        .map((info) => {
          // console.log(Object.keys(info));
          let container = "<li>";
          container += `<p>Id: ${info["id"]}</p>`;
          container += `<p>Serial: ${info["serial"]}</p>`;
          container += `<p>Block: ${
            info["block"] === null ? 0 : info["block"]
          }</p>`;
          container += `<p>Status: ${info["status"]}</p>`;
          container += `<p>Reuse Count: ${info["reuse_count"]}</p>`;
          container += `<p>Autonomous Spaceport Drone Ship(ASDS)</p>`;
          container += `<p class="tab">Attempts: ${info["asds_attempts"]}</p>`;
          container += `<p class="tab">Landings: ${info["asds_landings"]}</p>`;
          container += `<p>Return To Launch/Landing Site (RTLS)</p>`;
          container += `<p class="tab">Attempts: ${info["rtls_attempts"]}</p>`;
          container += `<p class="tab">Landings: ${info["rtls_landings"]}</p>`;
          // console.log(Object.keys(info["launches"]));
          for (const key in Object.keys(info["launches"])) {
            container += `<p>Launch(${parseInt(key) + 1}): ${
              info["launches"][key]
            }</p>`;
          }
          container += `<p>Last Update: ${info["last_update"]}</p>`;
          return container;
        })
        .join("");
    } else if (type === "crew") {
      listElement.innerHTML = infoList
        .map((info) => {
          // console.log(Object.keys(info));
          let container = "<li>";
          container += `<p>Id: ${info["id"]}</p>`;
          container += `<p>Name: ${info["name"]}</p>`;
          container += `<p>Agency: ${info["agency"]}</p>`;
          // console.log(Object.keys(info["launches"]));
          for (const key in Object.keys(info["launches"])) {
            container += `<p>Launch(${parseInt(key) + 1}): ${
              info["launches"][key]
            }</p>`;
          }
          container += `<p>Status: ${info["status"]}</p>`;
          container += `<p>Wikipedia: ${info["wikipedia"]}</p>`;
          container += `<p>Image: <a href="${info["image"]}" target="_blank" rel="noopener noreferrer">${info["name"]}</a></p>`;
          return container;
        })
        .join("");
    } else if (type === "dragons") {
      listElement.innerHTML = infoList
        .map((info) => {
          console.log(info);
          // console.log(Object.keys(info));
          let container = "<li>";
          container += `<p>Id: ${info["id"]}</p>`;
          container += `<p>Name: ${info["name"]}</p>`;
          container += `<p>Type: ${info["type"]}</p>`;
          container += `<p>Description: ${info["description"]}</p>`;
          container += `<p>Active: ${info["active"]}</p>`;
          container += `<p>Crew Capacity: ${info["crew_capacity"]}</p>`;
          container += `<p>First Flight: ${info["first_flight"]}</p>`;
          container += `<p>Orbit Duration: ${
            info["orbit_duration_yr"] === 1
              ? "1 year"
              : info["orbit_duration_yr"] + " years"
          }</p>`;
          // console.log(Object.keys(info["thrusters"]));
          for (const key in Object.keys(info["thrusters"])) {
            container += `<p class="tab">Type: ${info["thrusters"][key]["type"]}</p>`;
            container += `<p class="tab">Pods: ${info["thrusters"][key]["pods"]}</p>`;
            container += `<p class="tab">Amount: ${info["thrusters"][key]["amount"]}</p>`;
            container += `<p class="tab">Thrust Kilonewton: ${info["thrusters"][key]["thrust"]["kN"]}</p>`;
            container += `<p class="tab">Thrust Pound-Force: ${info["thrusters"][key]["thrust"]["lbf"]}</p>`;
            container += `<p class="tab">Specific Impulse(ISP): ${info["thrusters"][key]["thrust"]["isp"]}</p>`;
            container += `<p class="tab">Fuel 1: ${info["thrusters"][key]["fuel_1"]}</p>`;
            container += `<p class="tab">Fuel 2: ${info["thrusters"][key]["fuel_2"]}</p>`;
          }
          container += `<p>Heat Shield</p>`;
          container += `<p class="tab">Material: ${info["heat_shield"]["material"]}</p>`;
          container += `<p class="tab">Development Partner: ${info["heat_shield"]["dev_partner"]}</p>`;
          container += `<p class="tab">Size(Meters): ${info["heat_shield"]["size_meters"]}</p>`;
          container += `<p class="tab">Temperature Degrees: ${info["heat_shield"]["temp_degrees"]}</p>`;
          container += `<p>Pressurized Capsule Payload Volume(Cubic Feet): ${info["pressurized_capsule"]["cubic_feet"]}</p>`;
          container += `<p>Pressurized Capsule Payload Volume(Cubic Meters): ${info["pressurized_capsule"]["cubic_meters"]}</p>`;
          container += `<p>Trunk Solar Array: ${info["trunk"]["cargo"]["solar_array"]}</p>`;
          container += `<p>Trunk Unpressurized Cargo: ${info["trunk"]["cargo"]["unpressurized_cargo"]}</p>`;
          container += `<p>Trunk Volume(Cubic Feet): ${info["trunk"]["trunk_volume"]["cubic_feet"]}</p>`;
          container += `<p>Trunk Volume(Cubic Meters): ${info["trunk"]["trunk_volume"]["cubic_meters"]}</p>`;
          container += `<p>Diameter(Feet): ${info["diameter"]["feet"]}</p>`;
          container += `<p>Diameter(Meters): ${info["diameter"]["meters"]}</p>`;
          container += `<p>Sidewall Angle(Degree): ${info["sidewall_angle_deg"]}</p>`;
          container += `<p>Height W/Trunk(Feet): ${info["height_w_trunk"]["feet"]}</p>`;
          container += `<p>Height W/Trunk(Meters): ${info["height_w_trunk"]["meters"]}</p>`;
          container += `<p>Dry Mass(Kg): ${info["dry_mass_kg"]}</p>`;
          container += `<p>Dry Mass(Lb): ${info["dry_mass_lb"]}</p>`;
          container += `<p>Launch Payload Mass(Kg): ${info["launch_payload_mass"]["kg"]}</p>`;
          container += `<p>Launch Payload Mass(Lb): ${info["launch_payload_mass"]["lb"]}</p>`;
          container += `<p>Launch Payload Volume(Cubic Feet): ${info["launch_payload_vol"]["cubic_feet"]}</p>`;
          container += `<p>Launch Payload Volume(Cubic Meters): ${info["launch_payload_vol"]["cubic_meters"]}</p>`;
          container += `<p>Return Payload Mass(Kg): ${info["return_payload_mass"]["kg"]}</p>`;
          container += `<p>Return Payload Mass(Lb): ${info["return_payload_mass"]["lb"]}</p>`;
          container += `<p>Return Payload Volume(Cubic Feet): ${info["return_payload_vol"]["cubic_feet"]}</p>`;
          container += `<p>Return Payload Volume(Cubic Meters): ${info["return_payload_vol"]["cubic_meters"]}</p>`;
          container += `<p>Wikipedia: ${info["wikipedia"]}</p>`;
          // console.log(Object.keys(info["flickr_images"]));
          for (const key in Object.keys(info["flickr_images"])) {
            if (info["flickr_images"][key].includes("imgur")) {
              container += `<p>Image: <a href="${
                info["flickr_images"][key]
              }" target="_blank" rel="noopener noreferrer">${info["name"]} ${
                parseInt(key) + 1
              }</a></p>`;
            } else {
              container += `<img src="${info["flickr_images"][key]}" alt="${
                info["name"]
              } ${parseInt(key) + 1}">`;
            }
          }
          return container;
        })
        .join("");
    } else if (type === "history") {
      listElement.innerHTML = infoList
        .map((info) => {
          // console.log(Object.keys(info));
          let container = "<li>";
          container += `<p>Id: ${info["id"]}</p>`;
          container += `<p>Title: ${info["title"]}</p>`;
          container += `<p>Event Date(UTC): ${info["event_date_utc"]}</p>`;
          container += `<p>Details: ${info["details"]}</p>`;
          if (info["links"]["article"] != null) {
            container += `<p><a href="${info["links"]["article"]}" target="_blank">Link</a></p>`;
          };
          return container;
        })
        .join("");
    } else if (type === "landpads") {
      listElement.innerHTML = infoList
        .map((info) => {
          // console.log(Object.keys(info));
          let container = "<li>";
          container += `<p>Id: ${info["id"]}</p>`;
          container += `<p>Name: ${info["name"]}</p>`;
          container += `<p>Full Name: ${info["full_name"]}</p>`;
          container += `<p>Type: ${info["type"]}</p>`;
          container += `<p>Region: ${info["region"]}</p>`;
          container += `<p>Locality: ${info["locality"]}</p>`;
          container += `<p>Latitude: ${info["latitude"]}</p>`;
          container += `<p>Longitude: ${info["longitude"]}</p>`;
          container += `<p>Status: ${info["status"]}</p>`;
          container += `<p>Landing Attempts: ${info["landing_attempts"]}</p>`;
          container += `<p>Landing Successes: ${info["landing_successes"]}</p>`;
          // console.log(Object.keys(info["launches"]));
          for (const key in Object.keys(info["launches"])) {
            container += `<p>Launch(${parseInt(key) + 1}): ${
              info["launches"][key]
            }</p>`;
          }
          container += `<p>Details: ${info["details"]}</p>`;
          container += `<p>Wikipedia: ${info["wikipedia"]}</p>`;
          if (info["images"]["large"][0].includes("imgur")) {
            container += `<p>Image: <a href="${info["images"]["large"][0]}" target="_blank" rel="noopener noreferrer">${info["name"]}</a></p>`;
          } else {
            container += `<img src="${info["images"]["large"]["0"]}" alt="${info["name"]}">`;
          }
          return container;
        })
        .join("");
    } else if (type === "launchpads") {
      listElement.innerHTML = infoList
        .map((info) => {
          // console.log(Object.keys(info));
          let container = "<li>";
          container += `<p>Id: ${info["id"]}</p>`;
          container += `<p>Name: ${info["name"]}</p>`;
          container += `<p>Full Name: ${info["full_name"]}</p>`;
          container += `<p>Region: ${info["region"]}</p>`;
          container += `<p>Locality: ${info["locality"]}</p>`;
          container += `<p>Latitude: ${info["latitude"]}</p>`;
          container += `<p>Longitude: ${info["longitude"]}</p>`;
          container += `<p>Timezone: ${info["timezone"]}</p>`;
          container += `<p>Status: ${info["status"]}</p>`;
          container += `<p>Launch Attempts: ${info["launch_attempts"]}</p>`;
          container += `<p>Launch Successes: ${info["launch_successes"]}</p>`;
          // console.log(Object.keys(info["launches"]));
          for (const key in Object.keys(info["launches"])) {
            container += `<p>Launch(${parseInt(key) + 1}): ${
              info["launches"][key]
            }</p>`;
          }
          // console.log(Object.keys(info["rockets"]));
          for (const key in Object.keys(info["rockets"])) {
            container += `<p>Rocket(${parseInt(key) + 1}): ${
              info["rockets"][key]
            }</p>`;
          }
          container += `<p>Details: ${info["details"]}</p>`;
          if (info["images"]["large"][0].includes("imgur")) {
            container += `<p>Image: <a href="${info["images"]["large"][0]}" target="_blank" rel="noopener noreferrer">${info["name"]}</a></p>`;
          } else {
            container += `<img src="${info["images"]["large"][0]}" alt="${info["name"]}">`;
          }
          return container;
        })
        .join("");
    } else if (type === "rockets") {
      listElement.innerHTML = infoList
        .map((info) => {
          // console.log(Object.keys(info));
          let container = "<li>";
          container += `<p>Id: ${info["id"]}</p>`;
          container += `<p>Name: ${info["name"]}</p>`;
          container += `<p>Company: ${info["company"]}</p>`;
          container += `<p>Country: ${info["country"]}</p>`;
          container += `<p>First Flight: ${info["first_flight"]}</p>`;
          container += `<p>Type: ${info["type"]}</p>`;
          container += `<p>Boosters: ${info["boosters"]}</p>`;
          container += `<p>Diameter(Feet): ${info["diameter"]["feet"]}</p>`;
          container += `<p>Diameter(Meters): ${info["diameter"]["meters"]}</p>`;
          container += `<p>Mass(Kg): ${info["mass"]["kg"]}</p>`;
          container += `<p>Mass(Lb): ${info["mass"]["lb"]}</p>`;
          container += `<p>Height(Feet): ${info["height"]["feet"]}</p>`;
          container += `<p>Height(Meters): ${info["height"]["meters"]}</p>`;
          container += `<p>Cost Per Launch: ${info["cost_per_launch"]}</p>`;
          container += `<p>Success Rate: ${info["success_rate_pct"]}%</p>`;
          container += `<p>Engines</p>`;
          container += `<p class="tab">Number: ${info["engines"]["number"]}</p>`;
          container += `<p class="tab">Type: ${info["engines"]["type"]}</p>`;
          container += `<p class="tab">Layout: ${info["engines"]["layout"]}</p>`;
          container += `<p class="tab">Version: ${info["engines"]["version"]}</p>`;
          container += `<p class="tab">Propellant 1: ${info["engines"]["propellant_1"]}</p>`;
          container += `<p class="tab">Propellant 2: ${info["engines"]["propellant_2"]}</p>`;
          container += `<p class="tab">Sea Level Specific Impulse(ISP): ${info["engines"]["isp"]["sea_level"]}</p>`;
          container += `<p class="tab">Vacuum Specific Impulse(ISP): ${info["engines"]["isp"]["vacuum"]}</p>`;
          container += `<p class="tab">Thrust Sea Level Kilonewton: ${info["engines"]["thrust_sea_level"]["kN"]}</p>`;
          container += `<p class="tab">Thrust Sea Level Pound-Force: ${info["engines"]["thrust_sea_level"]["lbf"]}</p>`;
          container += `<p class="tab">Thrust Vacuum Kilonewton: ${info["engines"]["thrust_vacuum"]["kN"]}</p>`;
          container += `<p class="tab">Thrust Vacuum Pound-Force: ${info["engines"]["thrust_vacuum"]["lbf"]}</p>`;
          container += `<p>Landing Legs Material: ${info["landing_legs"]["material"]}</p>`;
          container += `<p>Landing Legs Number: ${info["landing_legs"]["number"]}</p>`;
          container += `<p>First Stage</p>`;
          container += `<p class="tab">Engines: ${info["first_stage"]["engines"]}</p>`;
          container += `<p class="tab">Burn Time: ${info["first_stage"]["burn_time_sec"]} Seconds</p>`;
          container += `<p class="tab">Fuel Amount: ${info["first_stage"]["fuel_amount_tons"]} Tons</p>`;
          container += `<p class="tab">Thrust Sea Level Kilonewton: ${info["first_stage"]["thrust_sea_level"]["kN"]}</p>`;
          container += `<p class="tab">Thrust Sea Level Pound-Force: ${info["first_stage"]["thrust_sea_level"]["lbf"]}</p>`;
          container += `<p class="tab">Thrust Vacuum Kilonewton: ${info["first_stage"]["thrust_vacuum"]["kN"]}</p>`;
          container += `<p class="tab">Thrust Vacuum Pound-Force: ${info["first_stage"]["thrust_vacuum"]["lbf"]}</p>`;
          container += `<p class="tab">Reusable: ${info["first_stage"]["reusable"]}</p>`;
          container += `<p>Second Stage</p>`;
          container += `<p class="tab">Engines: ${info["second_stage"]["engines"]}</p>`;
          container += `<p class="tab">Burn Time: ${info["second_stage"]["burn_time_sec"]} Seconds</p>`;
          container += `<p class="tab">Fuel Amount: ${info["second_stage"]["fuel_amount_tons"]} Tons</p>`;
          container += `<p class="tab">Thrust Kilonewton: ${info["second_stage"]["thrust"]["kN"]}</p>`;
          container += `<p class="tab">Thrust Pound-Force: ${info["second_stage"]["thrust"]["lbf"]}</p>`;
          container += `<p class="tab">Payloads Option 1: ${info["second_stage"]["payloads"]["option_1"]}</p>`;
          container += `<p class="tab">Payloads composite Fairing Diameter(Feet): ${info["second_stage"]["payloads"]["composite_fairing"]["diameter"]["feet"]}</p>`;
          container += `<p class="tab">Payloads composite Fairing Diameter(Meters): ${info["second_stage"]["payloads"]["composite_fairing"]["diameter"]["meters"]}</p>`;
          container += `<p class="tab">Reusable: ${info["second_stage"]["reusable"]}</p>`;
          container += `<p>Active: ${info["active"]}</p>`;
          container += `<p>Description: ${info["description"]}</p>`;
          container += `<p>Wikipedia: ${info["wikipedia"]}</p>`;
          // console.log(Object.keys(info["flickr_images"]));
          for (const key in Object.keys(info["flickr_images"])) {
            if (info["flickr_images"][key].includes("imgur")) {
              container += `<p>Image: <a href="${
                info["flickr_images"][key]
              }" target="_blank" rel="noopener noreferrer">${info["name"]} ${
                parseInt(key) + 1
              }</a></p>`;
            } else {
              container += `<img src="${info["flickr_images"][key]}" alt="${
                info["name"]
              } ${parseInt(key) + 1}">`;
            }
          }
          return container;
        })
        .join("");
    } else if (type === "ships") {
      listElement.innerHTML = infoList
        .map((info) => {
          // console.log(Object.keys(info));
          let container = "<li>";
          container += `<p>Id: ${info["id"]}</p>`;
          container += `<p>Legacy Id: ${info["legacy_id"]}</p>`;
          container += `<p>Name: ${info["name"]}</p>`;
          container += `<p>Model: ${
            info["model"] === null ? "N/A" : info["model"]
          }</p>`;
          container += `<p>Home Port: ${info["home_port"]}</p>`;
          container += `<p>Year Built: ${
            info["year_built"] === null ? "Unknown" : info["year_built"]
          }</p>`;
          container += `<p>Type: ${info["type"]}</p>`;
          container += `<p>Speed Knot: ${
            info["speed_kn"] === null ? "N/A" : info["speed_kn"]
          }</p>`;
          container += `<p>Mass(Kg): ${
            info["mass_kg"] === null ? "N/A" : info["mass_kg"]
          }</p>`;
          container += `<p>Mass(Lbs): ${
            info["mass_lbs"] === null ? "N/A" : info["mass_lbs"]
          }</p>`;
          container += `<p>Status: ${
            (info["status"] === "") | (info["status"] === null)
              ? "None"
              : info["status"]
          }</p>`;
          container += `<p>Active: ${info["active"]}</p>`;
          // console.log(Object.keys(info["launches"]));
          for (const key in Object.keys(info["launches"])) {
            container += `<p>Launch(${parseInt(key) + 1}): ${
              info["launches"][key]
            }</p>`;
          }
          // console.log(Object.keys(info["roles"]));
          for (const key in Object.keys(info["roles"])) {
            container += `<p>Role(${parseInt(key) + 1}): ${
              info["roles"][key]
            }</p>`;
          }
          if (info["link"] != null) {
            container += `<p><a href="${info["link"]}" target="_blank">Link</a></p>`;
          }
          container += `<p>Last AIS Update: ${
            info["last_ais_update"] === null ? "N/A" : info["last_ais_update"]
          }</p>`;
          console.log(info["image"]);
          if (info["image"]) {
            if (info["image"].includes("imgur")) {
              container += `<p>Image: <a href="${info["image"]}" target="_blank" rel="noopener noreferrer">${info["name"]}</a></p>`;
            } else {
              container += `<img src="${info["image"]}" alt="${info["name"]}">`;
            }
          } else {
            container += `<p>No Image</p>`;
          }
          return container;
        })
        .join("");
    }
  }
}

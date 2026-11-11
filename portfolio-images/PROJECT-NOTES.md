# Portfolio project notes

Source material for the website, taken from my CV and my old portfolio deck. Use these facts for the project case studies. Do not invent numbers that are not here. Image paths are relative to the `images/` folder.

## Featured projects (in this order)

### 1. FSAE drivetrain: dual motor transmission and limited slip differential (Stallion Motorsport Electric, 2022 to 2023)
- Role: Design and Testing Head. I designed all primary mechanical components from concept to production in Siemens NX.
- Custom limited slip differential integrated with the driven sprocket. Priorities: reliability and low weight.
- Dual electric motors, 136 Nm combined at 3751 rpm, chain drive to the rear wheels.
- Final drive ratio 3.87. Torque at the wheel 526 Nm.
- The differential's torque distribution contributed to winning the skidpad event.
- Transmission parts: motor mount, scatter shield, differential mount, titanium shaft, motor coupler, chain tensioner, tripod joint, LSD.
- Also designed a spool differential as an alternative.
- Led the fault finding on a gearbox overheating failure during testing: used thermal data to find the root cause, redesigned the part, revalidated on track, zero recurrence before competition.
- Result: All India Rank 1 at Formula Bharat 2023, after a 532 km validation test campaign. (Rank 8 the year before.)
- Images: `formula-student/fs-car-on-track.jpg` (hero image for the whole site), `transmission/transmission-assembly.jpg`, `limited-slip-differential/*`, `spool-differential/*`

### 2. Modular planetary gearbox (Oxford Brookes Racing, 2023)
- Problem: integrating the motor and planetary gearbox efficiently in the 2023 car.
- Focus: simpler assembly and maintenance, cutting build time and the chance of errors during race preparation.
- Designed in Siemens NX and Creo. Structural and thermal FEA in Ansys, correlated against strain gauge test data.
- Images: `planetary-gearbox/planetary-gearbox-section.jpg`, `planetary-gearbox-exploded.jpg`, `motor-gearbox-integration.jpg`

### 3. Single stage gearbox (Stallion Motorsport Electric)
- Multiplies motor torque of 68.7 Nm with a 2.29 reduction ratio.
- Spur gears chosen for load capacity, smooth running and simple design.
- Gear and shaft made as one piece for a compact, reliable assembly that is easy to machine.
- Module 2, driving gear 24 teeth, driven gear 55 teeth, 6 spline output shaft, 15 mm gear thickness.
- Material EN36. Manufactured by milling, gear shaping and hobbing.
- Images: `single-stage-gearbox/*`

### 4. Wheel assembly: upright, hub and wheel centre (Stallion Motorsport Electric)
- Main goal: lowest possible unsprung mass. Aluminium alloys, compact assembly.
- Easy to assemble and strip, strong enough for vehicle loads, designed around the suspension parameters.
- Force analysis in Ansys.
- Parts: upright, upper and lower shims, castle nut, hub, wheel centre, studs.
- Images: `wheel-assembly/*`

### 5. Root cause analysis: 94% reject rate to near zero (Osler Diagnostics, 2025)
- Precision sealing interface assemblies (medical diagnostics).
- Found the root cause of a 94% component reject rate using tolerance stack-up analysis and fault finding.
- Put corrective design and process changes in place, verified by follow on testing.
- Result: reject rate down to near zero, commissioning time down 20%.
- Designed and built validation setups, ran pressure, leak and functional tests, wrote formal test reports.
- No images (keep it confidential). Use a simple diagram or icon instead.

### 6. GE Vernova: test rigs, CFD and failure investigation (2025 to present)
- Keep this generic. No part numbers, customer or supplier names, or internal data.
- Designed and built test rigs and instrumentation for electromechanical product validation.
- Ansys CFD thermal simulation of a product enclosure, with formal technical reports.
- Led fault finding and root cause analysis on a failure found in cold weather validation testing down to minus 50 degrees Celsius. Corrective actions cleared a product shipment hold.
- Two peer recognitions: "One Team" award (led testing on a unit investigation at an external test house and in the factory) and "Customers" award (test setup, extra testing based on my own observations, and documentation for an overheating investigation).
- No images.

## Secondary projects (smaller cards or a "More work" section)

- **Crash simulation dissertation (MSc, 2024):** LS-DYNA, HyperMesh, Oasys Primer, Ansys. Simulated crash scenarios and seatbelt configurations. A modified seatbelt setup cut chest acceleration by about 18% and head injury risk by about 12%. Image: `crash-simulation-dissertation/crash-simulation-stages.jpg`
- **Composite chassis for a hydrogen vehicle (MSc):** FEA for crashworthiness, compared aluminium foam, Nomex and aluminium honeycomb impact attenuators. Met the 5 mm maximum deflection target. Images: `composites/honeycomb-sandwich-panel.jpg`, `composites/carbon-fibre-panel.jpg`
- **Aerodynamics and carbon fibre bodywork (Formula Student):** front and rear wing design (GOE 464, NACA 4412, NACA 6409, S1223, GOE 477, Eppler 1210 airfoils compared on Cl/Cd). Carbon fibre nose, wings, seat, dashboard and side panels using wet layup and vacuum bagging, 2x2 twill 250 gsm. Images: `aerodynamics/*`, `composites/composite-layup.jpg`, `composites/composite-part.jpg`, `formula-student/fs-car-render.jpg`
- **HV battery pack enclosure (Formula Student):** Images: `battery-pack/*`
- **Tesla Model 3 aerodynamics (MSc, 2024):** CFD in SolidWorks and SimScale. Effect of aero devices, crosswinds and wheel design on drag and lift.
- **Formula E Gen 3 setup and race strategy (MSc):** Monaco setup, ride height, springs, anti roll bars, diff settings, energy management with motor maps and regen.
- **Planetary gearbox with Ratna Gear Industries (2018 to 2019):** cost reduction and efficiency, CNC manufacture.

# Pico y Placa Validator (Quito)

A Command Line Interface (CLI) application built with **TypeScript** to predict if a vehicle can be on the road based on the "Pico y Placa" traffic regulations in Quito, Ecuador.

## Description
This program evaluates three inputs (License Plate, Date, and Time) to determine traffic restrictions. It handles:
* **Day of the week logic** (based on the date).
* **Plate restriction logic** (last digit).
* **Time range logic** (specific restricted hours).

## Tech Stack
* TypeScript
* Node.js
* `readline` (Native Node module for CLI input)

## How to Run

### Prerequisites
* Node.js installed on your machine.

### Installation
1.  Clone the repository or download the files.
2.  Install dependencies:
    ```bash
    npm install
    # Or manually: npm install -D typescript @types/node ts-node
    ```

### Execution
Run the program directly using `ts-node`:
```bash
npx ts-node main.ts
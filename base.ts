/**
 * With our phased approach to selecting battery pack build outs, it is possible that
 * there are different configurations of Base batteries that need to be supported.
 *
 * Inverters should support the following functionality:
 * Charge battery from the grid.
 * Discharge battery to grid.
 * Stop any running actions.
 * Return total state of energy.
 */

class ModbusClient {
  constructor(path: string, speed: number, timeout: number) {
    throw new Error("Out of scope");
  }

  readRegister(registerId: number): Promise<number> {
    throw new Error("Out of scope");
  }

  writeRegister(registerId: number, registerVal: number): Promise<void> {
    throw new Error("Out of scope");
  }
}

class Inverter {
  private name: string;
  private client: ModbusClient | null = null;
  private registerId: number[];

  constructor(name: string) {
    this.name = name;
  }

  private initialize(inverterType: string): void {
    if (this.client === null) {
      if (inverterType === "VendorAInverter") {
        this.client = new ModbusClient("rtu://dev1/ttyUSB5", 9600, 800);
      } else if (inverterType === "VendorBInverter") {
        this.client = new ModbusClient("rtu://dev/ttyUSB3", 9600, 200);
      }
    }
  }

  readRegister(registerId: number): Promise<number> {
    if (this.client === null) {
      this.initialize(this.name);
    }
    return this.client!.readRegister(registerId);
  }

  writeRegister(registerId: number, registerVal: number): void {
    if (this.client === null) {
      this.initialize(this.name);
    }
    this.client!.writeRegister(registerId, registerVal);
  }
}

async function main(): Promise<void> {
  // Register values are different based on inverter type and come from a spec defined by the vendor.
  const inverter1 = new Inverter("VendorAInverter");
  // Charge for VendorAInverter
  await inverter1.writeRegister(100, 1);
  // Discharge for VendorAInverter
  await inverter1.writeRegister(200, 1);
  // Stop for VendorAInverter
  await inverter1.writeRegister(100, 0);
  await inverter1.writeRegister(200, 0);
  // State of energy for VendorAInverter
  console.log(
    `Capacity for VendorAInverter: ${await inverter1.readRegister(50)}`
  );

  const inverter2 = new Inverter("VendorBInverter");
  // Charge for VendorBInverter
  await inverter2.writeRegister(10, 1);
  // Discharge for VendorBInverter
  await inverter2.writeRegister(20, 1);
  // Stop for VendorBInverter
  await inverter2.writeRegister(10, 0);
  await inverter2.writeRegister(20, 0);
  // State of energy for VendorBInverter
  console.log(
    `Capacity for VendorBInverter: ${await inverter2.readRegister(5)}`
  );
}

// Execute the main function
main().catch((error) => console.error("Unhandled error:", error));

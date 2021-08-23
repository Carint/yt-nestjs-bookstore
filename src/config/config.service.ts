import * as fs from 'fs';
import { parse } from 'dotenv';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const isDevelopmentEnv = process.env.NODE_ENV !== 'production';

    // Verifica si estamos en producción
    if (isDevelopmentEnv) {
      const envFilePath = __dirname + '/../../.env'; // Guardado de la ruta del archivo
      const existsPath = fs.existsSync(envFilePath); // Devuelve un valor booleano

      // Verificación de la existencia del archivo
      if (!existsPath) {
        console.log('.env file does not exist');
        process.exit(0);
      }

      // Convierte el archivo en un objeto de javascript
      this.envConfig = parse(fs.readFileSync(envFilePath));
    } else {
      this.envConfig = {
        PORT: process.env.PORT,
      };
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}

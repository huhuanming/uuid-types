// Type definitions for uuid v2.0.3

declare namespace uuid {
	interface V1Options {
		node?: number[];
		clockseq?: number;
		msecs?: number | Date;
		nsecs?: number;
	}

	type V4Options = { random: number[] } | { rng: () => number[]; }

	interface UuidStatic {
		(options?: V4Options): string;
		(options: V4Options | null, buffer: number[], offset?: number): number[];
		(options: V4Options | null, buffer: any, offset?: number): any;

		v1(options?: V1Options): string;
		v1(options: V1Options | null, buffer: number[], offset?: number): number[];
		v1(options: V1Options | null, buffer: any, offset?: number): any;
		v4: UuidStatic;
		parse(id: string): number[];
		parse(id: string, buffer: number[], offset?: number): number[];
		parse(id: string, buffer: any, offset?: number): any;
		unparse(buffer: number[] | any, offset?: number): string;
	}
}

declare const uuid: uuid.UuidStatic
export = uuid

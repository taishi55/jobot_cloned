import { writable } from "svelte/store";
import type { SavedJob } from "./types";

// list of job info
export const storeJobName = 'jobsInfo';
export const markedJobsInfo = writable<SavedJob[]>([])
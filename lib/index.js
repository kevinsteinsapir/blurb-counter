/* eslint-disable import/extensions */
import { Application } from "@hotwired/stimulus";
import CharacterCountController from "./controllers/character_count_controller.js";

// TODO: Import the Stimulus Controller here

window.Stimulus = Application.start();
window.Stimulus.register("character-count", CharacterCountController);
// TODO: Register your Stimulus Controller below

<?php

namespace Controller;

class Controller
{
    // Variable Attributes
    public $controllerName;
    public $controllerMethod;

    // Method untuk mengambil semua atribut
    public function getControllerAttribute()
    {
        return [
            "ControllerName" => $this->controllerName,
            "Method" => $this->controllerMethod,
        ];
    }
}
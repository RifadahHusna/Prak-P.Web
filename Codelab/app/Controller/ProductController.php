<?php

namespace app\Controller;

require_once __DIR__ . "/../Traits/ApiResponseFormatter.php";
require_once __DIR__ . "/../Models/Product.php";

use app\Models\Product;
use app\Traits\ApiResponseFormatter;

class ProductController
{
    use ApiResponseFormatter;

    public function index()
    {
        // DEFINISI OBJEK MODEL PRODUCT YANG SUDAH DIBUAT
        $productModel = new Product();
        $response = $productModel->findAll();
        // RETURN Response DENGAN MELAKUKAN FORMATTING TERLEBIH DAHULU MENGGUNAKAN TRAIT YANG SUDAH DIPANGGIL
        return $this->apiResponse(200, "success", $response);
    }

    public function getById($id)
    {
        $productModel = new Product();
        $response = $productModel->findById($id);
        return $this->apiResponse(200, "success", $response);
    }

    public function insert()
    {
        // TANGKAP INPUT JSON
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);
        // VALIDASI INPUT VALID ATAU TIDAK
        if (json_last_error()) {
            return $this->apiResponse(400, "Error invalid input", null);
        }

        $productModel = new Product();
        $response = $productModel->create([
            "product_name" => $inputData['product_name']
        ]);

        return $this->apiResponse(200, "success", $response);
    }

    public function update($id)
    {
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);
        if (json_last_error()) {
            return $this->apiResponse(400, "Error invalid input", null);
        }

        $productModel = new Product();
        $response = $productModel->update([
            "product_name" => $inputData['product_name']
        ], $id);

        return $this->apiResponse(200, "success", $response);
    }

    public function delete($id)
    {
        $productModel = new Product();
        $response = $productModel->delete($id);
        return $this->apiResponse(200, "success", $response);
    }
}
